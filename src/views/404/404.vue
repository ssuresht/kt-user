<template>
	<v-card
		flat
		color="#f9f9f9"
		class="border-radius0"
		:height="cardHeight"
		:class="{
			'px-15 py-15': $vuetify.breakpoint.smAndUp,
			'px-5 py-10': $vuetify.breakpoint.xs,
		}"
	>
		<div
			class="position-absolute desktop-cover"
			v-if="$vuetify.breakpoint.mdAndUp"
		>
			<img src="@/assets/images/404_vector.png" alt="404_vector" />
		</div>
		<div
			class="d-flex align-center"
			:class="{
				'full-height': $vuetify.breakpoint.smAndUp,
				'flex-wrap': $vuetify.breakpoint.smAndDown,
			}"
		>
			<div class="content flex-grow-1">
				<div
					class="font-Poppins-SemiBold text-1f2020"
					:class="{
						'font-96px fw-600': $vuetify.breakpoint.smAndUp,
						'font-48px text-center fw-500': $vuetify.breakpoint.xs,
					}"
				>
					404
				</div>

				<div
					class="font-Poppins-SemiBold text-1f2020 mt-10-reverse"
					:class="{
						'font-36px ': $vuetify.breakpoint.smAndUp,
						'font-16px text-center': $vuetify.breakpoint.xs,
					}"
				>
					Not Found
				</div>

				<div
					v-if="$vuetify.breakpoint.smAndUp"
					class="text-000 font-Noto-Sans-Medium mt-1"
					:class="{
						'font-20px': $vuetify.breakpoint.smAndUp,
						'font-16px text-center': $vuetify.breakpoint.xs,
					}"
				>
					お探しのページは見つかりませんでした
				</div>

				<div
					class="text-8e"
					:class="{
						'font-16px mt-7': $vuetify.breakpoint.smAndUp,
						'font-14px text-center mt-5 px-10': $vuetify.breakpoint.xs,
					}"
				>
					申し訳ございませんが、 お探しのページが見つかりませんでした。<br />
					お探しのページは削除されたか、 URLが変更された可能性がございます。
				</div>

				<div
					v-if="$vuetify.breakpoint.smAndUp"
					class="text-primary"
					:class="{
						'font-16px mt-7': $vuetify.breakpoint.smAndUp,
						'font-14px d-flex justify-center  mt-5': $vuetify.breakpoint.xs,
					}"
				>
					<v-btn outlined width="230px" height="46px" @click="$router.push({name: 'Top'})">
						<div class="d-flex align-center">
							<v-icon>$GreenU</v-icon>
							<div class="pl-1">TOPへもどる</div>
						</div></v-btn
					>
				</div>
			</div>
			<div class="flex-grow-1 d-flex justify-center phone-cover">
				<div v-if="$vuetify.breakpoint.mdAndUp" class="mt-10">
					<img
						src="@/assets/images/404_cover.png"
						class="desktop_404"
						alt="404_cover_image"
					/>
				</div>
				<div v-else class="d-flex justify-center mt-5">
					<img
						src="@/assets/images/404_cover_mobile.png"
						class="mobile_404"
						alt="404_cover_image"
					/>
				</div>
			</div>
		</div>
	</v-card>
</template>

<script>
export default {
	components: {},
	computed: {
		cardHeight(){
			return this.$vuetify.breakpoint.mdAndUp ? "640px" : ""
		}
	}
};
</script>

<style src="./styles.scss" lang="scss" scoped></style>
