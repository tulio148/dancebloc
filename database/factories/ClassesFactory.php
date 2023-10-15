<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Classes>
 */
class ClassesFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'id' => fake()->uuid,
            'name' => fake()->unique()->sentence,
            'description' => fake()->paragraph,
            'style' => 'samba',
            'level' => fake()->randomElement(['beginner', 'advanced']),
            'instructor' => 'Jane Doe',
            'enrollment_mode' => fake()->randomElement(['single', 'term']),
            'datetime' => fake()->dateTimeBetween('+1 week', '+2 months'),
            'location' => 'the studio',
            'price' => fake()->randomFloat(2, 10, 100),
            'version' => fake()->randomNumber(2),
            'stupid_square_name' => fake()->word,

        ];
    }
}
