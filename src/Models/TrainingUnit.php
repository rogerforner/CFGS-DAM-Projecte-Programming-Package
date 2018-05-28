<?php

namespace Rogerforner\ScoolProgramming\Models;

use Illuminate\Database\Eloquent\Model;
use Rogerforner\ScoolProgramming\Models\ProfessionalModule;
use Rogerforner\ScoolProgramming\Models\Temary;

class TrainingUnit extends Model
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
        'uf',
        'name',
        'date_start',
        'date_end',
        'section1',
        'section2',
        'section3',
        'section4',
        'approved',
        'professional_module_id',
        'created_by',
        'updated_by',
    ];

    /**
     * Eloquent: Relationships.
     **************************************************************************/
    /**
     * Professional Module.
     * Get the professional module of the training unit.
     */
    public function professionalModule()
    {
        return $this->belongsTo(ProfessionalModule::class);
    }

    /**
     * Temaries.
     * Get the temaries for the training unit.
     */
    public function temaries()
    {
        return $this->hasMany(Temary::class);
    }
}
