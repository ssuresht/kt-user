<template>
	<div>
		<v-card
			color="#f9f9f9"
			class="border-radius0"
			:class="{
				'py-15 px-4': $vuetify.breakpoint.smAndUp,
				'py-5 px-4': $vuetify.breakpoint.xs,
			}"
		>
			<div class="mw-1000">
				<v-card
					color="#fff"
					flat
					:class="{
						'py-15 desktop-padding': $vuetify.breakpoint.smAndUp,
						'py-5 px-4': $vuetify.breakpoint.xs,
					}"
				>
				<div class="content-container">
					<div
						class="font-Noto-Sans-Medium text-center"
						:class="{
							'font-24px': $vuetify.breakpoint.smAndUp,
							'font-16px': $vuetify.breakpoint.xs,
						}"
					>
						退会
					</div>
					<div
						class="text-1f2020"
						:class="{
							'font-16px mt-8 text-center': $vuetify.breakpoint.smAndUp,
							'font-14px mt-6': $vuetify.breakpoint.xs,
						}"
					>
						Kotonaruからの退会手続きを行います。<br />
						退会後は、企業からのフィードバック等の情報の確認ができなくなります。<br />
						また、一度退会すると、登録情報を再度使用することはできません。<br />
						退会を希望される方は「退会」ボタンを、<br />
						退会しない方は「戻る」ボタンをクリックしてください。
					</div>
					<div
						class="font-Noto-Sans-Medium"
						:class="{
							'font-18px mt-10': $vuetify.breakpoint.smAndUp,
							'font-14px mt-8': $vuetify.breakpoint.xs,
						}"
					>
						退会理由
					</div>

					<form @submit.prevent="handleForm" class="mt-5">
						<div class="input-group d-flex" :class="{'align-center': $vuetify.breakpoint.smAndUp}">
							<input type="radio" id="option-1" name="withdrawal_reason"/>
							<label
								for="option-1"
								class="ml-2"
								:class="{
									'font-16px': $vuetify.breakpoint.smAndUp,
									'font-14px': $vuetify.breakpoint.xs,
								}"
								>就職先が決まった</label
							>
						</div>

						<div class="input-group d-flex mt-3" :class="{'align-center': $vuetify.breakpoint.smAndUp}">
							<input type="radio" id="option-2" name="withdrawal_reason"/>
							<label
								for="option-2"
								class="ml-2"
								:class="{
									'font-16px': $vuetify.breakpoint.smAndUp,
									'font-14px': $vuetify.breakpoint.xs,
								}"
								>自分に合うインターン情報が無かった</label
							>
						</div>

						<div class="input-group d-flex mt-3" :class="{'align-center': $vuetify.breakpoint.smAndUp}">
							<input type="radio" id="option-3" name="withdrawal_reason" />
							<label
								for="option-3"
								class="ml-2"
								:class="{
									'font-16px': $vuetify.breakpoint.smAndUp,
									'font-14px': $vuetify.breakpoint.xs,
								}"
								>忙しくなり、インターンに参加できなくなった</label
							>
						</div>

						<div class="input-group d-flex mt-3" :class="{'align-center': $vuetify.breakpoint.smAndUp}">
							<input type="radio" id="option-4" name="withdrawal_reason"/>
							<label
								for="option-4"
								class="ml-2"
								:class="{
									'font-16px': $vuetify.breakpoint.smAndUp,
									'font-14px': $vuetify.breakpoint.xs,
								}"
								>オンラインインターンシップに参加する必要がなくなった</label
							>
						</div>

						<div class="input-group d-flex mt-3" :class="{'align-center': $vuetify.breakpoint.smAndUp}">
							<input type="radio" id="option-5" name="withdrawal_reason"/>
							<label
								for="option-5"
								class="ml-2"
								:class="{
									'font-16px': $vuetify.breakpoint.smAndUp,
									'font-14px': $vuetify.breakpoint.xs,
								}"
								>オンラインインターンシップへの興味がなくなった</label
							>
						</div>

						<div class="input-group d-flex mt-3" :class="{'align-center': $vuetify.breakpoint.smAndUp}">
							<input type="radio" id="option-6" name="withdrawal_reason"/>
							<label
								for="option-6"
								class="ml-2"
								:class="{
									'font-16px': $vuetify.breakpoint.smAndUp,
									'font-14px': $vuetify.breakpoint.xs,
								}"
								>その他</label
							>
						</div>

						<div
							class="buttons"
							:class="{
								'mt-10': $vuetify.breakpoint.smAndUp,
								'mt-8': $vuetify.breakpoint.xs,
							}"
						>
							<div class="d-flex justify-center">
                                <div class="d-flex justify-center" :class="{'flex-column-reverse': $vuetify.breakpoint.smAndDown}">
								<v-btn
									color="#8e8e8e"
									class="text-fff"
									:width="buttonWidth"
									:height="buttonHeight"
									>戻る</v-btn
								>
								<v-btn
									color="#13aba3"
									class="text-fff" :class="{'flex-column-reverse mb-4': $vuetify.breakpoint.smAndDown, 'ml-8': $vuetify.breakpoint.mdAndUp}"
									:width="buttonWidth"
									:height="buttonHeight"
									>退会</v-btn
								>
                                </div>
							</div>

							
						</div>

					</form>
					</div>
				</v-card>
			</div>
		</v-card>
	</div>
</template>

<script>
export default {
	methods:{
		handleForm(){}
	},
	computed: {
		buttonWidth() {
			return this.$vuetify.breakpoint.smAndUp ? "286px" : "300px";
		},
		buttonHeight() {
			return this.$vuetify.breakpoint.smAndUp ? "46px" : "41px";
		},
	},
};
</script>

<style src="./styles.scss" lang="scss" scoped></style>
