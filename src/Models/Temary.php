<?php

namespace Rogerforner\ScoolProgramming\Models;

use Illuminate\Database\Eloquent\Model;
use Rogerforner\ScoolProgramming\Models\TrainingUnit;

class Temary extends Model
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
        'nf',
        'duration',
        'name',
        'description',
        'training_unit_id',
        'created_by',
        'updated_by',
    ];

    /**
     * Eloquent: Relationships.
     **************************************************************************/
    /**
     * Training Unit.
     * Get the training unit of the temary.
     */
    public function trainingUnit()
    {
        return $this->belongsTo(TrainingUnit::class);
    }
}
