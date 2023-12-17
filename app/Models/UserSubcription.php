<?php

namespace App\Models;

use App\Models\SubcriptionPlan;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class UserSubcription extends Model
{
    use HasFactory, SoftDeletes;
    protected $fillable = ['user_id', 'subcription_plan_id', 'price', 'expired_date', 'payment_status', 'snap_token'];

    /**
     * Get the user that owns the UserSubcription
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function subcriptionPlan(): BelongsTo{
        return $this->belongsTo(SubcriptionPlan::class);
    }
}
