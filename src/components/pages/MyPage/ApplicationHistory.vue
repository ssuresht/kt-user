<template>
	<div>
		<kotonaruModal v-if="kotonaruModal" @closeKotonaruModal="handleModal()" />
		<div v-if="!feedback">
			<div v-if="!kotonaruModal">
				<Box :applicationHistory="true" v-on:openKotonaruModal="handleModal()">
					<template v-slot:hero>
						<Hero />
					</template>
					<template v-slot:button-and-text>
						<v-card
							flat
							class="borderradius-0 mx-auto"
							:max-width="buttonAndTextWidth"
						>
							<div
								class="d-flex justify-center align-center button-and-text mt-15"
							>
								<div v-if="$vuetify.breakpoint.smAndUp">
									<CrownDesktop />
								</div>
								<div v-else>
									<CrownMobile />
								</div>
								<div class="d-flex button-and-text flex-wrap">
									<span
										class="text-1f2020"
										:class="{
											'font-16px': $vuetify.breakpoint.smAndUp,
											'font-14px': $vuetify.breakpoint.xs,
										}"
										>あなたの</span
									>
									<v-btn
										class="text-fff font-Noto-Sans-Bold borderradius-5"
										:height="buttonHeight"
										:width="buttonWidth"
										:color="primaryColor"
										:class="{
											'font-14px': $vuetify.breakpoint.smAndUp,
											'font-12px': $vuetify.breakpoint.xs,
										}"
										>リーダーシップ</v-btn
									>
									<span
										class="text-1f2020"
										:class="{
											'font-16px': $vuetify.breakpoint.smAndUp,
											'font-14px': $vuetify.breakpoint.xs,
										}"
										>はとても評価されています！</span
									>
								</div>
							</div>
						</v-card>
					</template>
					<template v-slot:kt-power-8-text>
						<div
							class="text-8e"
							:class="{
								'font-16px px-15 mt-8': $vuetify.breakpoint.smAndUp,
								'font-14px mt-5 px-5': $vuetify.breakpoint.xs,
							}"
						>
							<div>
								Kotonaru Power
								8では「リーダーシップ」「大胆さ」「外向性」「創造性」「協調性」「綿密さ」「内省的」「論理性」の8項目であなたの力を表現します
							</div>
							<div class="mt-2">
								企業からあなたの最も評価された力と今後の成長に期待したい力のフィードバックを受けることができ、その結果が数値とコメントで反映されます。
							</div>
							<div class="mt-2">
								複数インターンをするとフィードバックがたまり、あなたの力がさらにはっきりと分かるようになります。
							</div>
							<div class="mt-2">
								あなたのチャレンジに対するフィードバックから「なんとなく」やりたいと思っていたことが「カタチ」となり、新しい自分を発見できるでしょう。
							</div>
						</div>
					</template>
				</Box>
				<v-card color="#e5e5e5" class="pb-15" flat>
					<div class="mw-1000">
						<div
							class="font-Noto-Sans-Bold"
							:class="{
								'font-30px': $vuetify.breakpoint.smAndUp,
								'font-20px text-center': $vuetify.breakpoint.xs,
							}"
						>
							フィードバック
						</div>
						<v-card
							color="#fff"
							flat
							class="mt-5"
							:class="{
								'py-15 px-20 ': $vuetify.breakpoint.smAndUp,
								'py-8 px-3 ': $vuetify.breakpoint.xs,
							}"
						>
							<div
								class="text-1f2020"
								:class="{
									'font-16px': $vuetify.breakpoint.smAndUp,
									'font-14px pl-4': $vuetify.breakpoint.xs,
								}"
							>
								あなたへのフィードバックはまだありません。<br />
								コトナルのリモートインターンに応募してみま<br
									v-if="$vuetify.breakpoint.xs"
								/>しょう！
							</div>
							<v-card
								flat
								class="position-relative border-card"
								:class="{
									'mt-15 px-20': $vuetify.breakpoint.smAndUp,
									'mt-10 px-4 pb-5': $vuetify.breakpoint.xs,
								}"
							>
								<v-btn
									class="text-fff absolute"
									:height="screenButtonHeight"
									:width="screenButtonWidth"
									color="#c4c4c4"
									:class="{
										'font-18px screen-button-absoute-desktop':
											$vuetify.breakpoint.smAndUp,
										'font-14px screen-button-absoute-mobile':
											$vuetify.breakpoint.xs,
									}"
								>
									サンプル画面
								</v-btn>
								<div
									class=""
									:class="{
										'py-15': $vuetify.breakpoint.smAndUp,
										'py-4': $vuetify.breakpoint.xs,
									}"
								>
									<div
										class="text-black"
										:class="{
											'font-20px': $vuetify.breakpoint.smAndUp,
											'font-14px': $vuetify.breakpoint.xs,
										}"
									>
										株式会社Kotonaru
									</div>
									<div class="text-8e d-flex justify-end">2022年〇月</div>
									<div
										class="d-flex align-center button-and-text"
										:class="{
											'mt-10': $vuetify.breakpoint.smAndUp,
											'mt-5': $vuetify.breakpoint.xs,
										}"
									>
										<div v-if="$vuetify.breakpoint.smAndUp">
											<CrownDesktop />
										</div>
										<div v-else>
											<CrownMobile />
										</div>
										<div class="d-flex button-and-text flex-wrap">
											<span
												class="text-1f2020"
												:class="{
													'font-16px': $vuetify.breakpoint.smAndUp,
													'font-14px': $vuetify.breakpoint.xs,
												}"
												>あなたの</span
											>
											<v-btn
												class="text-fff font-Noto-Sans-Bold borderradius-5"
												:height="buttonHeight"
												:width="buttonWidth"
												:color="primaryColor"
												:class="{
													'font-14px': $vuetify.breakpoint.smAndUp,
													'font-12px': $vuetify.breakpoint.xs,
												}"
												>リーダーシップ</v-btn
											>
										</div>
									</div>
									<div class="text-8e mt-5 font-14px">
										◯◯さんは、プロジェクトの目的を早い段階で理解し、目的達成のために必要なタスクを洗い出し、誰よ
										りも先んじて行動してくれました。◯◯さんが作成したロードマップやタスク管理表があったことで、チ
										ームメンバーは具体的な活動をすることができました
									</div>

									<div
										class="d-flex align-center button-and-text"
										:class="{
											'mt-15': $vuetify.breakpoint.smAndUp,
											'mt-5': $vuetify.breakpoint.xs,
										}"
									>
										<div>
											<LeafImage />
										</div>
										<div class="d-flex button-and-text flex-wrap">
											<span
												class="text-1f2020"
												:class="{
													'font-16px': $vuetify.breakpoint.smAndUp,
													'font-14px': $vuetify.breakpoint.xs,
												}"
												>期待したい力</span
											>
											<v-btn
												class="text-fff font-Noto-Sans-Bold borderradius-5"
												:height="buttonHeight"
												:width="buttonWidth"
												color="#aa158b"
												:class="{
													'font-14px': $vuetify.breakpoint.smAndUp,
													'font-12px': $vuetify.breakpoint.xs,
												}"
												>綿密さ</v-btn
											>
										</div>
									</div>
									<div class="text-8e mt-5 font-14px">
										◯◯さんならば、仕事を進める上で認識を合わせるべき関係部署の活動も想像し、より詳細なプロジェクト
										計画を作成できると思います。大まかな流れは把握できているので
										、もう一歩踏み込んで確認することや、周囲に相談することでさらに高い
										成果を出せると思います。
									</div>
								</div>
							</v-card>
						</v-card>
					</div>
				</v-card>
			</div>
		</div>

		<div v-else>
			<div >
				<Box v-on:openKotonaruModal="handleModal()">
					<template v-slot:button-and-text>
						<v-card
							flat
							class="borderradius-0 mx-auto"
							:max-width="buttonAndTextWidth"
						>
							<div
								class="d-flex justify-center align-center button-and-text mt-15"
							>
								<div v-if="$vuetify.breakpoint.smAndUp">
									<CrownDesktop />
								</div>
								<div v-else>
									<CrownMobile />
								</div>
								<div class="d-flex button-and-text flex-wrap">
									<span
										class="text-1f2020"
										:class="{
											'font-16px': $vuetify.breakpoint.smAndUp,
											'font-14px': $vuetify.breakpoint.xs,
										}"
										>あなたの</span
									>
									<v-btn
										class="text-fff font-Noto-Sans-Bold borderradius-5"
										:height="buttonHeight"
										:width="buttonWidth"
										:color="primaryColor"
										:class="{
											'font-14px': $vuetify.breakpoint.smAndUp,
											'font-12px': $vuetify.breakpoint.xs,
										}"
										>リーダーシップ</v-btn
									>
									<span
										class="text-1f2020"
										:class="{
											'font-16px': $vuetify.breakpoint.smAndUp,
											'font-14px': $vuetify.breakpoint.xs,
										}"
										>はとても評価されています！</span
									>
								</div>
							</div>
						</v-card>
					</template>
					<template v-slot:feedback-text>
						<div class="content mt-10 mw-1000">
							<div
								class="heading-2 text-1f2020 mb-5"
								:class="{
									'font-30px': $vuetify.breakpoint.smAndUp,
									'font-20px text-center': $vuetify.breakpoint.xs,
								}"
							>
								フィードバック
							</div>
							<v-card
								color="#fff"
								flat
								class="borderradius-0 cursor-pointer sec2-cards mb-1"
								v-for="(box, index) in boxContent"
								:key="index"
							>
								<div
									class="d-flex align-center justify-space-between py-5 pl-6 pr-12"
									:style="{ height: '100%' }"
									v-if="$vuetify.breakpoint.smAndUp"
									@click="box.show = !box.show"
								>
									<div class="d-flex align-center">
										<div :class="{ 'rotate-icon': box.show }">
											<v-icon>$dropdown</v-icon>
										</div>
										<span
											class="text-1f2020 pl-3"
											:class="{ 'font-20px': $vuetify.breakpoint.smAndUp }"
											>{{ box.title }}</span
										>
									</div>
									<span
										class="text-8e"
										:class="{ 'font-16px': $vuetify.breakpoint.smAndUp }"
										>{{ box.date }}</span
									>
								</div>
								<div
									v-else
									class="d-flex align-center pl-5 py-3"
									:style="{ height: '100%' }"
									@click="box.show = !box.show"
								>
									<div :class="{ 'rotate-icon': box.show }">
										<v-icon>$dropdown</v-icon>
									</div>
									<div class="d-flex flex-column pl-4">
										<span class="text-8e font-12px">{{ box.date }}</span>
										<span class="text-1f2020 font-16px">{{ box.title }}</span>
									</div>
								</div>
								<v-expand-transition>
									<div
										class="answers"
										v-if="box.show"
										:class="{
											'px-20': $vuetify.breakpoint.smAndUp,
											'px-6': $vuetify.breakpoint.xs,
										}"
									>
										<div
											v-for="(boxanswer, index) in box.answer"
											:key="index"
											:class="{
												'py-10': $vuetify.breakpoint.smAndUp,
												'py-5': $vuetify.breakpoint.xs,
											}"
										>
											<div
												v-for="(currentanswer, index) in boxanswer"
												:key="index" :class="{'mt-15': index !== 0 && $vuetify.breakpoint.smAndUp}"
											>
												<!-- INNER LOOP STARTS HERE -->

												<div
													class="d-flex justify-end"
													v-if="currentanswer.hasOwnProperty('date')"
												>
													<div
														class="text-8e"
														:class="{
															'font-16px': $vuetify.breakpoint.smAndUp,
															'font-12px': $vuetify.breakpoint.xs,
														}"
													>
														{{ currentanswer.date }}
													</div>
												</div>

												<div class="mt-5">
													<div class="d-flex align-center">
														<div v-if="currentanswer.icon === 'leaf'">
															<LeafImage />
														</div>
														<div v-else>
															<div v-if="$vuetify.breakpoint.smAndUp">
																<CrownDesktop />
															</div>
															<div v-else>
																<CrownMobile />
															</div>
														</div>
														<div
															class="font-Noto-Sans-Bold pl-2"
															:class="{
																'font-16px': $vuetify.breakpoint.smAndUp,
																'font-14px': $vuetify.breakpoint.xs,
															}"
														>
															{{ currentanswer.text }}
														</div>
														<div
															:class="{
																'pl-6': $vuetify.breakpoint.smAndUp,
																'pl-3': $vuetify.breakpoint.xs,
															}"
														>
															<v-btn
																class="text-fff font-Noto-Sans-Bold border-radius5"
																:color="currentanswer.button.color"
																:width="buttonWidth"
																:height="buttonHeight"
																:class="{
																	'font-14px ': $vuetify.breakpoint.smAndUp,
																	'font-12px ': $vuetify.breakpoint.xs,
																}"
															>
																{{ currentanswer.button.text }}
															</v-btn>
														</div>
													</div>
													<div
														class="content text-8e"
														:class="{
															'font-16px mt-5': $vuetify.breakpoint.smAndUp,
															'font-14px mt-3': $vuetify.breakpoint.xs,
														}"
													>
														{{ currentanswer.content }}
													</div>
												</div>
											</div>

											<div
												class="border-card"
												v-if="index !== boxanswer.length - 1"
												:class="{
													'mt-15': $vuetify.breakpoint.smAndUp,
													'mt-5': $vuetify.breakpoint.xs,
												}"
											></div>
											<!--  INNER LOOP ENDS HERE  -->
										</div>
									</div>
								</v-expand-transition>
							</v-card>
						</div>
					</template>
				</Box>
			</div>
		</div>
	</div>
</template>

<script>
import Box from "@/components/pages/MyPage/Box.vue";
import CrownDesktop from "@/components/other/CrownDesktop.vue";
import CrownMobile from "@/components/other/Crownmobile.vue";
import LeafImage from "@/components/other/LeafImage.vue";
import kotonaruModal from "./kotonaruModal.vue";
import Hero from "./Hero.vue";

export default {
	components: {
		Box,
		CrownDesktop,
		CrownMobile,
		LeafImage,
		Hero,
		kotonaruModal,
	},
	emits: ["openKotonaruModal"],
	methods: {
		handleModal() {
			this.kotonaruModal = !this.kotonaruModal;
		},
	},
	data() {
		return {
			kotonaruModal: false,
			feedback: true,
			boxContent: [
				{
					title: "株式会社sample design",
					date: "2021年3月",
					show: false,
					answer: [
						[
							{
								date: "2021年1月",
								icon: "crown",
								text: "評価された力",
								button: {
									color: "#AA158B",
									text: "綿密さ",
								},
								content:
									"〇〇さんは、プロジェクトの目的を早い段階で理解し、目的達成のために必要なタスクを洗い出し、誰よりも先んじて行動してくれました。〇〇さんが作成したロードマップやタスク管理表があったことで、チームメンバーは具体的な活動をすることができました。",
							},

							{
								icon: "leaf",
								text: "評価された力",
								button: {
									color: "#13ABA3",
									text: "リーダーシップ",
								},
								content:
									"〇〇さんは、プロジェクトの目的を早い段階で理解し、目的達成のために必要なタスクを洗い出し、誰よりも先んじて行動してくれました。〇〇さんが作成したロードマップやタスク管理表があったことで、チームメンバーは具体的な活動をすることができました。",
							},
						],
						[
							{
								date: "2020年12月",
								icon: "crown",
								text: "評価された力",
								button: {
									color: "#13ABA3",
									text: "リーダーシップ",
								},
								content:
									"〇〇さんは、プロジェクトの目的を早い段階で理解し、目的達成のために必要なタスクを洗い出し、誰よりも先んじて行動してくれました。〇〇さんが作成したロードマップやタスク管理表があったことで、チームメンバーは具体的な活動をすることができました。",
							},

							{
								icon: "crown",
								text: "評価された力",
								button: {
									color: "#13ABA3",
									text: "リーダーシップ",
								},
								content:
									"〇〇さんは、プロジェクトの目的を早い段階で理解し、目的達成のために必要なタスクを洗い出し、誰よりも先んじて行動してくれました。〇〇さんが作成したロードマップやタスク管理表があったことで、チームメンバーは具体的な活動をすることができました。",
							},
						],
					],
				},
				{
					title: "株式会社Kotonaru",
					date: "2021年1月",
					show: false,
				},
				{
					title: "株式会社business",
					date: "2021年1月",
					show: false,
				},
			],
		};
	},
	computed: {
		primaryColor() {
			return "#13ABA3";
		},
		buttonWidth() {
			return this.$vuetify.breakpoint.smAndUp ? "145px" : "96px";
		},
		buttonHeight() {
			return this.$vuetify.breakpoint.smAndUp ? "25px" : "21px";
		},
		buttonAndTextWidth() {
			return this.$vuetify.breakpoint.smAndUp ? "100%" : "300px";
		},
		screenButtonWidth() {
			return this.$vuetify.breakpoint.smAndUp ? "173px" : "117px";
		},
		screenButtonHeight() {
			return this.$vuetify.breakpoint.smAndUp ? "38px" : "26px";
		},
	},
};
</script>

<style lang="scss" scoped>
.card {
	padding: 0 16px;
}
.button-and-text {
	gap: 10px;
}
.borderradius-5 {
	border-radius: 5px;
}
.mw-1000 {
	max-width: 1000px !important;
	margin: auto;
}
.border-card {
	border: 1px solid #e5e5e5;
}
.screen-button-absoute-desktop {
	top: -21px;
	left: 50%;
	transform: translateX(-50%);
}
.screen-button-absoute-mobile {
	top: -17px;
	left: 50%;
	transform: translateX(-50%);
}
.rotate-icon {
	transform: rotate(180deg);
}
.border-radius5 {
	border-radius: 5px;
}
</style>
