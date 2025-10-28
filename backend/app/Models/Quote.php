<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Quote extends Model
{
    protected $primaryKey = '_id';
    public $incrementing = false;
    protected $keyType = 'string';

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            if (empty($model->_id)) {
                $model->_id = str_replace('-', '', Str::uuid()->toString());
            }
        });
    }

    protected $fillable = [
        'content',
    ];
}
