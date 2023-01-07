<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Convidado extends Model
{
    use HasFactory;

    protected $fillable = [
        'nome', 'email', 'confirmou_presenca', 'total_pessoas'
    ];

    protected $table = 'convidado';

    public function user()
    {
        return $this->belongsTo(User::class, 'users_id');
    }
}
