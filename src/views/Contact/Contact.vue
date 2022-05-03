<template>
	<div>
		<v-card color="#f9f9f9" flat class="border-radius0" :class="{
			'py-15' : $vuetify.breakpoint.smAndUp,
			'py-7 px-3' : $vuetify.breakpoint.xs,
		}">
		<div class="mw-1000">
			<v-card flat color="#fff" :class="{
			'py-15' : $vuetify.breakpoint.smAndUp,
			'py-5 px-4' : $vuetify.breakpoint.xs,
		}">
		<div class="text-center text-1f2020" :class="{
			'font-24px': $vuetify.breakpoint.smAndUp,
			'font-16px': $vuetify.breakpoint.xa,
		}">
			お問い合わせ
		</div>
		<div class="text-1f2020 mt-5" :class="{
			'font-16px text-center': $vuetify.breakpoint.smAndUp,
			'font-14px': $vuetify.breakpoint.xa,
		}">
			下記フォームに必要項目を入力し、送信してください。<br />
            3営業日以内にご連絡いたします。
		</div>
		<div class="container-width mx-auto">
			<validation-observer ref="basicInformationInput">
				<v-form ref="contactForm" @submit.prevent="updateBasicInformation">
					<basic-information-input :class="{'mt-10': $vuetify.breakpoint.smAndUp, 'mt-5': $vuetify.breakpoint.xs}" :fields="fields" />
					<div class="d-flex justify-center mt-6">
						<v-btn
							@click="updateBasicInformation"
							depressed
							color="primary"
							rounded
							:width="buttonWidth"
							:height="buttonHeight"
							class="font-16px fw-500"
							>送信</v-btn
						>
					</div>
				</v-form>
			</validation-observer>
		</div>
		</v-card>
		</div>
		</v-card>
	</div>
	
</template>

<script>
import BasicInformationInput from "@/components/common/BasicInformationInput.vue";
export default {
	name: "BasicInformationModal",
	components: {
		BasicInformationInput,
	},
	computed: {
		buttonWidth() {
			return this.$vuetify.breakpoint.smAndUp ? "286px" : "300px";
		},
		buttonHeight() {
			return this.$vuetify.breakpoint.smAndUp ? "46px" : "41px";
		},
	},
	data() {
		return {
			fields: null,
		};
	},
	created() {
		this.getModalFields();
	},
	methods: {
		updateBasicInformation() {
			this.$refs.basicInformationInput.validate().then((success) => {
				if (!success) {
					return;
				}

			let data = {};
			this.fields.forEach(field => {
				if (field) {
					if (field.value) {
					data[field.name] = field.value;
					}
				}
			});

			this.$store
				.dispatch("CONTACT_SUBMIT", data)
				.then(() => {
					//this.$refs.contactForm.reset();
				})
				.finally(() => {
					this.loading = false;
				});
			});
		},
		getAutoSuggestionText(item) {
			return `${item.name} / ${item.id}`;
		},
		getModalFields() {
			this.fields = [
				{
					label: "会社名 / 学校名",
					name: "company_or_school_name",
					type: "text",
					placeholder: "会社名 / 学校名",
					value: "",
					rules: "",
				},
				{
					label: "氏名",
					name: "name",
					type: "text",
					placeholder: "氏名",
					required_text: '必須',
					value: "",
					rules: "required: 氏名",
				},
				{
					label: "メールアドレス",
					name: "email",
					type: "text",
					placeholder: "メールアドレス",
					value: "",
					required_text: '必須',
					rules: "required: メールアドレス|email",
				},
				{
					label: "電話番号",
					name: "telephone",
					type: "text",
					placeholder: "電話番号",
					value: "",
					rules: "",
				},
				{
					label: "お問い合わせ内容",
					name: "inquiry_content",
					type: "textarea",
					required_text: '必須',
					placeholder: "お問い合わせ内容",
					value: "",
					rules: "required: お問い合わせ内容",
				},
			];
		},
	},
};
</script>
<style src="./styles.scss" lang="scss" scoped></style>
