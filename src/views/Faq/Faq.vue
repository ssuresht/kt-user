<template>
	<div>
		<v-card
			class="border-radius0"
			flat
			color="#f9f9f9"
			:class="{
				'py-15': $vuetify.breakpoint.smAndUp,
				'py-8': $vuetify.breakpoint.xs,
			}"
		>
			<div
				class="font-Noto-Sans-Medium text-center"
				:class="{
					'font-24px': $vuetify.breakpoint.smAndUp,
					'font-16px': $vuetify.breakpoint.xs,
				}"
			>
				よくある質問
			</div>
			<v-card
				flat
				color="#f9f9f9"
				:class="{
					'pt-15': $vuetify.breakpoint.smAndUp,
					'px-4': $vuetify.breakpoint.smAndDown,
					'pt-8': $vuetify.breakpoint.xs,
				}"
			>
				<div class="mw-1000">
					<div class="faq">
						<v-card
							flat
							v-for="(faqItem, index) in FAQ"
							:key="index"
							class="border-radius0"
							:class="{
								'border-top-radius': index === 0,
								'border-bottom-radius': index === FAQ.length - 1,
							}"
						>
						<div :class="{
								'py-4 px-6': $vuetify.breakpoint.smAndUp,
								'py-2 px-4': $vuetify.breakpoint.xs}">
							<div
								@click="faqItem.show = !faqItem.show"
								class="question cursor-pointer text-1f2020 d-flex justify-space-between"
								:class="{
									'font-16px': $vuetify.breakpoint.smAndUp,
									'font-14px': $vuetify.breakpoint.xs,
								}"
							>
								<div class="d-flex pr-4">
									<span
										class="text-primary font-Noto-Sans-Bold pr-4"
										:class="{
											'font-24px': $vuetify.breakpoint.smAndUp,
											'font-20px': $vuetify.breakpoint.xs,
										}"
										>Q</span
									>
									<div
										class="mt-1"
										:class="{ 'mt-2': $vuetify.breakpoint.smAndUp }"
									>
										{{ faqItem.question }}
									</div>
								</div>
								<div :class="{ 'rotate-icon': faqItem.show }">
									<v-slide-y-transition>
										<v-icon>$dropdownGray</v-icon>
									</v-slide-y-transition>
								</div>
							</div>
							<v-expand-transition>
								<div
									v-if="faqItem.show"
									class="answer text-747474 d-flex pr-4"
									:class="{
										'font-16px mt-6': $vuetify.breakpoint.smAndUp,
										'font-14px mt-4': $vuetify.breakpoint.xs,
									}"
								>
									<span
										class="text-purple font-Noto-Sans-Bold pr-4"
										:class="{
											'font-24px': $vuetify.breakpoint.smAndUp,
											'font-20px': $vuetify.breakpoint.xs,
										}"
										>A</span
									>
									<div class="mt-1 mx-1">
										<p v-if="index == 0">
											コトナルに掲載されているインターンは全て有給のため、お金を稼ぎながら企業での就業経験ができる点は変わりません。<br />
											大きな違いは、「目的意識の必要性」と「仕事の内容」です。インターンを実施する際は「その経験から何を得たいか」を考えておきましょう。
										</p>

										<p v-if="index == 1">
											もちろん、可能です。<br />
											空きコマを使って働くことも、ゼミやサークル活動のスキマ時間を使って働くことも可能です。自分の働きやすい時間を明確にして、インターン先と相談しましょう。
										</p>

										<p v-if="index == 2">
											以下の仕事内容を想定しています。<br />
											☑ サービス企画のための顧客調査設計とインタビューの実施
											<br />
											☑ 企業向けアプリケーション開発/
											自社製品や社内ツールのシステム開発 <br />
											☑ SNSで利用するコンテンツ企画と作成、およびデータ分析
											<br />
											☑営業チームやマーケティングチームと一緒にディスカッションをして、方針、戦略を考える
											<br />
											☑ 地域の魅力を発信する情報誌の編集手伝い
										</p>

										<p v-if="index === 3">
											大学（院）生、専門学校、短期大学問わず、1年生から積極的にご参加ください。
										</p>
										<p v-if="index === 4">
											もちろん、参加できます。<br />
											すべての長期インターンがオンラインで就業できますので、住んでいる場所によらず参加することが可能です。ぜひ積極的に応募してください。
										</p>
										<p v-if="index === 5">
											大学（院）生、専門学校、短期大学問わず、1年生から積極的にご参加ください。
										</p>
										<p v-if="index === 6">
											フィードバックの頻度とタイミング等はインターン先ごとに異なります。
										</p>
										<p v-if="index === 7">
											時給が掲載よりも低い提示を受けたなど、学生側に不利な条件提示を受けた場合はお問い合わせフォームからコトナル事務局までご連絡ください。
										</p>
										<p v-if="index === 8">
											以下のメリットがあります。<br />
											①  アルバイトでは得られない仕事体験ができる <br />
											②  自分の可能性や能力に気づける <br />
											③  住んでいる場所に関わらず参加できる <br />
											④  空きコマやスキマ時間を活用できる <br />
											⑤  就業経験を通じて新しい人間関係を得られる
										</p>
										<p v-if="index === 9">
											「有給で長期間（1ヶ月以上）実際のビジネスの現場でオンラインを通じて就業すること」です。
										</p>
									</div>
								</div>
							</v-expand-transition>
							</div>
							<div class="border-e5e5e5" v-if="index !== FAQ.length - 1"></div>
						</v-card>

						<div
							class="text-1f2020 text-center"
							:class="{
								'mt-15 font-16px': $vuetify.breakpoint.smAndUp,
								'mt-8 font-14px': $vuetify.breakpoint.xs,
							}"
						>
							上記以外でご質問がございましたら、
							<br
								v-if="$vuetify.breakpoint.xs"
							/>こちらからお問い合わせください。
						</div>
						<div
							class="d-flex justify-center"
							:class="{
								'mt-8 mb-10': $vuetify.breakpoint.smAndUp,
								'mt-5 mb-5': $vuetify.breakpoint.xs,
							}"
						>
							<v-btn
								color="#1baba3"
								class="text-fff"
								:width="buttonWidth"
								:height="buttonHeight"
								:class="{
									'font-16px': $vuetify.breakpoint.smAndUp,
									'font-14px': $vuetify.breakpoint.xs,
								}"
							>
								お問い合わせ
							</v-btn>
						</div>
					</div>
				</div>
			</v-card>
		</v-card>
	</div>
</template>

<script>
export default {
	computed: {
		buttonHeight() {
			return this.$vuetify.breakpoint.smAndUp ? "46px" : "41px";
		},
		buttonWidth() {
			return this.$vuetify.breakpoint.smAndUp ? "286px" : "300px";
		},
	},
	data() {
		return {
			FAQ: [
				{
					question: "長期オンラインインターンとアルバイトの違いは何ですか？",
					answer:
						"",
					show: false,
				},
				{
					question: "長期オンラインインターンと学業との両立は可能ですか？",
					answer:
						"",
					show: false,
				},
				{
					question:
						"長期オンラインインターンの仕事内容はどのようなものがありますか？",
					answer:
						"",
					show: false,
				},
				{
					question: "1年生からでも始められますか？",
					answer:
						"",
					show: false,
				},
				{
					question: "地方から長期オンラインインターンに参加できますか？",
					answer:
						"",
					show: false,
				},
				{
					question: "応募してから、どのくらいで企業から返事がきますか？",
					answer:
						"",
					show: false,
				},
				{
					question: "インターン先からのフィードバックは、いつもらえますか？",
					answer:
						"",
					show: false,
				},
				{
					question:
						"インターン先から、募集と異なる不利な条件を提示された場合はどうしたらいいですか？",
					answer:
						"",
					show: false,
				},
				{
					question: "長期オンラインインターンのメリットは何ですか？",
					answer:
						"",
					show: false,
				},
				{
					question: "長期オンラインインターンの定義は何ですか？",
					answer:
						"",
					show: false,
				},
			],
		};
	},
};
</script>

<style lang="scss" src="./style.scss" scoped></style>
