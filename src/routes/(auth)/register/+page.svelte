<script lang="ts">
	import { enhance } from '$app/forms';
</script>

<div class="flex h-screen w-screen items-center justify-center">
	<form method="POST" action="?/register" use:enhance class="card w-96 bg-base-100 shadow-xl">
		<div class="card-body flex flex-col gap-4">
			<div>
				<label class="label" for="username">Username</label>
				<input
					type="text"
					placeholder="Username"
					name="username"
					class="input-bordered input w-full focus:outline-primary"
				/>
			</div>
			<div>
				<label class="label" for="username">First name</label>
				<input
					type="text"
					placeholder="First name"
					name="first_name"
					class="input-bordered input w-full focus:outline-primary"
				/>
			</div>
			<div>
				<label class="label" for="username">Last name</label>
				<input
					type="text"
					placeholder="Last name"
					name="last_name"
					class="input-bordered input w-full focus:outline-primary"
				/>
			</div>
			<div>
				<label class="label" for="email">Email</label>
				<input
					type="email"
					placeholder="Email"
					name="email"
					class="input-bordered input  w-full focus:outline-primary"
				/>
			</div>
			<div>
				<label class="label" for="password">Password</label>
				<input
					type="password"
					placeholder="Password"
					name="password"
					class="input-bordered input  w-full focus:outline-primary"
				/>
			</div>
			<div>
				<label class="label" for="passwordConfirm">Confirm Password</label>
				<input
					type="password"
					name="passwordConfirm"
					placeholder="Confirm Password"
					class="input-bordered input w-full focus:outline-primary"
				/>
			</div>
			<button class="btn-primary btn mt-4">Sign up</button>
		</div>
	</form>
</div>
