<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Channel extends Model
{
    protected $table = 'chat_channel';

    protected $fillable = [
        'channel_id', 'channel_social_id', 'service_id', 'cover_image',
        'allowed_domain', 'name', 'avatar', 'link', 'user_id',
        'is_subscribed', 'is_delete', 'type', 'created_at', 'updated_at',
        'created_by	', 'udpated_by', 'created_source',
    ];

    protected $hidden = [
        'channel_access_token',
    ];
}
