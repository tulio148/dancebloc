<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::table('orders', function (Blueprint $table) {
            $table->json('items_uid')->after('items_ids');
            $table->integer('version')->default(1);
        });
    }

    public function down()
    {
        Schema::table('orders', function (Blueprint $table) {
            $table->dropColumn('items_uid');
            $table->dropColumn('version');
        });
    }
};


Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga provident officia nam corrupti consectetur modi qui sequi ipsa magnam enim. Iste asperiores in, unde iusto illum soluta? Mollitia earum nam, sint nostrum repellendus, atque libero molestiae corporis inventore autem unde.