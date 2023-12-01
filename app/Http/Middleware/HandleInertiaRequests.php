<?php

namespace App\Http\Middleware;

use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
// use Auth;
use Carbon\Carbon;


class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array|null
     */
    private function activePlan()
    {
        $activePlan = Auth::user() ? Auth::user()->LastActiveUserSubcription : null;
        // dd($activePlan);
        if (!$activePlan) {
            return null;
        }
        
        $lastDay = Carbon::parse($activePlan->updated_at)->addMonths($activePlan->subcriptionPlan->active_period_in_months);
        $activeDays = Carbon::parse($activePlan->updated_at)->diffInDays($lastDay);
        $remainingActiveDays = Carbon::parse($activePlan->expired_date)->diffInDays(Carbon::now());    
       
        return[
            'name'=> $activePlan->subcriptionPlan->name,
            'remainingActiveDays' => $remainingActiveDays,
            'activeDays'=> $activeDays,
        ];

    }

    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
                'activePlan'=> $this->activePlan(),
            ],
            'ziggy' => fn () => [
                ...(new Ziggy)->toArray(),
                'location' => $request->url(),
            ],
        ];
    }
}
