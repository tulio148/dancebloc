<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Student>
 */
class StudentFactory extends Factory
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
            'user_id' => fake()->unique()->numberBetween(1, 10),
            'name' => fake()->name,
            'email' => fake()->unique()->safeEmail,
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
