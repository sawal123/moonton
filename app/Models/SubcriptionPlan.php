<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubcriptionPlan extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'price', 'active_period_in_months', 'features'];
}
