<?php

namespace Database\Seeders;

use App\Models\Movie;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //

        $movies = [
           [
            'name' => 'The Swashank Redemtion',
            'slug' => 'the-swashank-redemtion',
            'category'=> 'Drama',
            'video_url'=> 'https://www.youtube.com/watch?v=PLl99DlL6b4',
            'thumbnail' => 'https://m.media-amazon.com/images/S/pv-target-images/d56b2942bc24e60043c79b061040c63d43ba529f0db1feff055e3b7a4dcc28ce.jpg',
            'rating'=> 4.3,
            'is_featured' => true
           ],
           [
            'name' => 'The God Father',
            'slug' => 'the-god-father',
            'category'=> 'Drama',
            'video_url'=> 'https://www.youtube.com/watch?v=UaVTIH8mujA',
            'thumbnail' => 'https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2022/07/14/4186926147.jpg',
            'rating'=> 4.0,
            'is_featured' => false
           ],
           [
            'name' => 'The God Father : Part II',
            'slug' => 'the-god-father-part-ii',
            'category'=> 'Drama',
            'video_url'=> 'https://www.youtube.com/watch?v=WojB6J3A7Uw',
            'thumbnail' => 'https://ntvb.tmsimg.com/assets/p6319_v_h8_bi.jpg?w=1280&h=720',
            'rating'=> 4.2,
            'is_featured' => false
           ]
        ];

        Movie::insert($movies);
    }
}
