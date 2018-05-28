<?php

namespace Rogerforner\ScoolProgramming\Models;

use Illuminate\Database\Eloquent\Model;
use Rogerforner\ScoolProgramming\Models\Department;
use Rogerforner\ScoolProgramming\Models\TrainingUnit;

class ProfessionalModule extends Model
{
    /**
     * Inserting & Updating Models.
     **************************************************************************/
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'mp',
        'name',
        'section1',
        'section2',
        'section3',
        'section4',
        'approved',
        'public',
        'department_id',
        'created_by',
        'updated_by',
    ];

    /**
     * Eloquent: Relationships.
     **************************************************************************/
    /**
     * Department.
     * Get the department of the professional module.
     */
    public function department()
    {
        return $this->belongsTo(Department::class)->withDefault();
    }

    /**
     * Training Units.
     * Get the training units for the professional module.
     */
    public function trainingUnits()
    {
        return $this->hasMany(TrainingUnit::class);
    }
}
