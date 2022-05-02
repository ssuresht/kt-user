<template>
  <div class="full-width full-height bg-ffffff">
    <v-card
      flat
      max-width="620px"
      class="py-10 post-detail"
      :class="{
        'mt-0 mx-3 px-3': $vuetify.breakpoint.smAndDown,
        'mx-auto mt-5': $vuetify.breakpoint.mdAndUp,
      }"
    >
      <div class="d-flex">
        <v-chip
          color="primary lighten-3"
          class="black--text post-tags"
          :class="{
            'font-12px mr-2': $vuetify.breakpoint.smAndDown,
            'font-14px mr-3': $vuetify.breakpoint.mdAndUp,
          }"
          v-for="(tag, index) in tags"
          :key="index"
          >{{ tag }}
        </v-chip>
      </div>

      <div
        class="d-flex my-5 text-bbb post-date"
        :class="{
          'font-12px': $vuetify.breakpoint.smAndDown,
          'font-14px': $vuetify.breakpoint.mdAndUp,
        }"
      >
        <span>
          <v-icon left size="18px" class="mr-1">mdi-clock-outline</v-icon>
          {{ dayjs(getMedia.created_at, "YYYY年M月D日") }}</span
        >
        <span class="ml-5">
          <v-icon left size="18px" class="mr-1">mdi-update</v-icon
          >{{ dayjs(getMedia.updated_at, "YYYY年M月D日") }}</span
        >
      </div>

      <div
        class="text-1f2020 fw-500 font-Noto-Sans-Medium py-5 post-title"
        :class="{
          'font-18px': $vuetify.breakpoint.smAndDown,
          'font-24px': $vuetify.breakpoint.mdAndUp,
        }"
      >
        {{ getMedia.title }}
      </div>
      <div class="position-relative py-5 featured-image">
        <v-img width="100%" height="325px" :src="getMainImage"> </v-img>
      </div>
      <v-divider
        class="full-width my-5 post-divider"
        :class="{
          'ml-8': $vuetify.breakpoint.smAndDown,
          'ml-16': $vuetify.breakpoint.mdAndUp,
        }"
        horizontal
      ></v-divider>

      <div class="excerpt pt-5">
        <div
          class="heading text-center font-Noto-Sans-Medium"
          :class="{
            'font-14px': $vuetify.breakpoint.smAndDown,
            'font-16px': $vuetify.breakpoint.mdAndUp,
          }"
        >
          このコラムのポイント
        </div>
        <div
          class="texts font-16px py-5 text-left"
          :class="{
            'font-12px': $vuetify.breakpoint.smAndDown,
            'ml-10 font-16px': $vuetify.breakpoint.mdAndUp,
          }"
        >
          {{ getMedia.summery }}
        </div>
      </div>

      <v-divider
        class="full-width my-5 post-divider"
        :class="{
          'ml-8': $vuetify.breakpoint.smAndDown,
          'ml-16': $vuetify.breakpoint.mdAndUp,
        }"
        horizontal
      ></v-divider>

      <div
        class="feature-list mt-10 py-5 bg-f9f9f9"
        :class="{
          'px-5': $vuetify.breakpoint.smAndDown,
          'px-10': $vuetify.breakpoint.mdAndUp,
        }"
      >
        <div
          class="heading font-Noto-Sans-Medium text-1f2020"
          :class="{
            'text-center font-16px': $vuetify.breakpoint.smAndDown,
            'text-left font-20px': $vuetify.breakpoint.mdAndUp,
          }"
        >
          目次
        </div>
        <ul class="py-2 pl-5 text-3979d9">
          <li v-for="(item, index) in links" :key="index">
            <a
              :href="item.link"
              class="text-3979d9"
              :class="{
                'font-14px': $vuetify.breakpoint.smAndDown,
                'font-16px': $vuetify.breakpoint.mdAndUp,
              }"
            >
              {{ item.content }}
            </a>
          </li>
        </ul>
      </div>
      <div class="post-description" ref="postDescription"></div>
      <!-- <div class="header bg-f9f9f9 my-8 pl-3 pt-2 fw-500 font-20px text-1f2020">
        オンラインインターンシップとは？
      </div>
      <div class="subheading text-primary font-18px font-Noto-Sans-Medium my-7">
        オンラインインターンシップとはどんなもの？
      </div>
      <div class="paragraph my-5">
        <p>
          インターンシップは、社会に出る前に仕事の場を体験できる機会です。企業で働いている人から直接話を聞いたり、仕事を体験してみたりすることで、業種や職種、企業による仕事内容の違いや働いている人たちの雰囲気、社風の違いを知ることができます。
        </p>
        <p>
          もともとインターンシップは、学生と企業が実際に顔を合わせて行う「対面型」が主流でしたが、近年はITツールの発達に伴って、Web上で「オンラインインターンシップ」を実施する企業も出てきていました。
        </p>
        <p>
          対面型のインターンシップでは、学生が会場まで足を運ぶ必要があるのに対し、オンラインインターンシップは、世界中どこからでもWeb環境が整っていれば参加できる点が大きな違いです。学生にとっては移動時間や交通費の負担がなくなり、企業にとってもさまざまな学生と出会うチャンスが広がります。
        </p>
      </div>
      <div class="subheading text-primary font-18px font-Noto-Sans-Medium my-7">
        2020年はオンライン実施を検討する企業が増えている
      </div>
      <div class="paragraph my-5">
        <p>
          2020年は新型コロナウイルスの感染拡大を受け、企業が従来のような対面型のインターンシップを実施するのが難しい状況になりました。今年度のインターンシップについて調査したところ、「中止する」と決定した企業は多くなく、「まだ検討中」と回答する企業が前年より大幅に増加しています。そうした中で、実施を決定・予定している企業は感染予防対策として、学生を集めずに実施できるオンラインインターンシップを検討するケースが増えています。
        </p>
        <p>
          特に、2021年卒の採用選考をオンラインで実施した企業は、その実績に手応えを感じて、前向きにオンラインインターンシップの実施を検討している傾向にあるようです。就職みらい研究所が実施した「就職プロセス調査」（2020年6月12日時点
          内定状況）では、従業員5000人以上の企業の約6割が最終面接をWeb面接で行ったのに対し、従業員100人未満の企業では約2割にとどまりました。このことからインターンシップに関しても、比較的大きな企業の方がオンラインを導入する割合が多いと考えられます。
        </p>
        <p>
          また、いち早くオンラインインターンシップの事例を実施した企業を見ると、通常業務の中ですでにオンライン化が進んでいたところが多いようです。
        </p>
      </div>
      <div
        class="position-relative "
        :class="{
          'mx-5': $vuetify.breakpoint.smAndDown,
          'mx-16': $vuetify.breakpoint.mdAndUp,
        }"
      >
        <v-img
          :width="$vuetify.breakpoint.mdAndUp ? '398px' : '300px'"
          :height="$vuetify.breakpoint.mdAndUp ? '294px' : '200px'"
          src="/img/content-image.png"
        >
        </v-img>
      </div>
      <div class="header bg-f9f9f9 my-8 pl-3 pt-2 fw-500 font-20px text-1f2020">
        オンラインインターンシップの特徴とは？
      </div>
      <div class="paragraph my-5">
        <p>
          オンラインインターンシップについて具体的にイメージできず、不安を感じる学生さんもいるでしょう。しかし、「学生に就業体験を提供する」というインターンシップ本来の目的は、対面型がオンラインになっても変わりません。
        </p>
        <p>
          特徴としては、前述のように距離や時間の制約がなくなることで、どこからでも全国のインターンシップに参加することができます。また、オンラインではチャット機能で社員とコミュニケーションを取る場合もあり、対面に比べて気軽に話しかけたり、全員に話題をシェアしたりすることが可能になります。それによって、企業と学生とのコミュニケーションや学びの総量が増えることが期待できるでしょう
        </p>
      </div>
      <div class="subheading text-primary font-18px font-Noto-Sans-Medium my-7">
        プログラムの内容は？
      </div>
      <div class="paragraph my-5">
        <p>
          オンラインインターンシップを実施する企業の多くは、例年のインターンシップのプログラム内容をオンライン上で提供するかを検討していますが、中にはオンライン化でプログラムを刷新する企業もあります。説明を聞いたり限られた時間で質疑応答をしたりしていたものを、動画なども織り交ぜて説明をしたり、チャットを活用して多くの参加者が質問できるようにするなど、オンラインであることを生かした工夫を凝らしています。
        </p>
        <p>
          プログラム内容すべてをオンラインで完結するのが難しい場合には、事前学習などをオンラインで実施し、対面でワークを行うなど、双方の良さを生かしたハイブリッド型を選択する企業もあるようです。
        </p>
      </div>
      <div class="subheading text-primary font-18px font-Noto-Sans-Medium my-7">
        選考の有無や開催期間は？
      </div>
      <div class="paragraph my-5">
        <p>
          インターンシップには「選考あり」と｢選考なし｣の2種類があります。「選考あり」は「選考なし」に比べると参加できる人数が限定される場合が多く、事前にエントリーシートや面接により選考があることも。それに対して「選考なし」は、定員数に達するまでは、希望すれば参加することができます。オンラインインターンシップにおいてもこれらの2通りがあり、その点は対面のインターンシップと変わりありません。
        </p>
        <p>
          また、開催期間については、例年は数日～数週間で実施している企業でも、オンライン化によって、期間に変化があるかもしれません。日数だけにとらわれず、プログラムの内容も含めていろいろ調べてみましょう。
        </p>
      </div>
      <div class="header bg-f9f9f9 my-8 pl-3 pt-2 fw-500 font-20px text-1f2020">
        オンラインインターンシップでわかることは？
      </div>
      <div class="subheading text-primary font-18px font-Noto-Sans-Medium my-7">
        オンライン上での業務の進め方やコミュニケーション
      </div>
      <div class="paragraph my-5">
        <p>
          オンラインインターンシップは、対面のインターンシップと同様に職種や仕事内容などについて知ることができますが、オンライン上での業務の進め方やコミュニケーションの取り方を体験できる場でもあります。
        </p>
        <p>
          オンラインインターンシップに積極的な企業は、すでに通常業務のオンライン化が進んでいるケースが多いため、入社してからも社員同士や顧客とオンライン上でコミュニケーションを取ったり、オフィスに行かずに業務をしたりする機会があるかもしれません。オンラインインターンシップは、そうした企業の様子を垣間見られるチャンスでもあるでしょう。
        </p>
        <p>
          社風や職場の雰囲気を知りたいけれど、実際にオフィスに行けないのでわからないと思う学生さんもいるかもしれません。そんなときは、オンラインインターンシップで接点を持った社員に自分の知りたいことを聞いてみるとよいでしょう。
          また、中にはVR技術を使ってリアルな職場の様子を体験できるというプログラムを実施している企業もあります。自分が知りたいことをプログラムに組み込んでいるオンラインインターンシップを探してみるのも一つの方法です。
        </p>
      </div> -->
    </v-card>
    <v-card
      flat
      color="bg-f9f9f9"
      class="recommended-post post-page"
      :class="{
        'mt-5 px-5 py-10 mb-10': $vuetify.breakpoint.smAndDown,
        'my-15 py-15': $vuetify.breakpoint.mdAndUp,
      }"
    >
      <div class="mx-auto max-width-1300">
        <div
          class="font-Noto-Sans-Medium text-1f2020 mb-5"
          :class="{
            'font-16px text-center': $vuetify.breakpoint.smAndDown,
            'font-24px': $vuetify.breakpoint.mdAndUp,
          }"
        >
          こちらもオススメ
        </div>
        <v-row
          justify-md="center"
          justify-lg="space-between"
          justify-xl="space-between"
          class="post-row"
        >
          <v-col
            cols="auto"
            v-for="(post, index) in getMediaList.slice(0, postlimit)"
            :key="index"
          >
            <PostItem
              :key="index"
              v-bind="{
                ...post,
              }"
            ></PostItem>
          </v-col>
        </v-row>
      </div>
    </v-card>
    <div
      class="d-flex justify-center align-center"
      :class="{
        'mb-10': $vuetify.breakpoint.smAndDown,
        'mb-20': $vuetify.breakpoint.mdAndUp,
      }"
    >
      <v-btn
        width="216px"
        depressed
        color="primary"
        rounded
        x-large
        class="font-18px"
        height="54px"
        @click="$router.push({ name: 'Posts' })"
        >コラム一覧へ</v-btn
      >
    </div>
  </div>
</template>
<script>
import PostItem from "@/components/common/PostItem.vue";
import { mapGetters } from "vuex";
export default {
  name: "PostDetail",
  components: {
    PostItem,
  },
  data() {
    return {
      links: [],
      configuration: {
        page: 1,
        sort_by: "view_counts",
        sort_by_order: "desc",
        is_draft: "N",
        paginate: 3,
        tag_search: [],
      },
    };
  },
  computed: {
    ...mapGetters(["getMedia", "getAllMediaList"]),
    getMediaList() {
      return this.getAllMediaList.map((media) => {
        return {
          id: media.id,
          img: media.seo_featured_image ?? "/img/post-3.png",
          title: media.title,
          tags: media.media_tags,
          date: media.public_date,
        };
      });
    },
    tags() {
      return this.getMedia.media_tags.map((tag) => tag.name);
    },
    postlimit() {
      return this.$vuetify.breakpoint.smAndDown ? "2" : "3";
    },
    getMainImage() {
      return this.getMedia.seo_featured_image ?? "/img/post-3.png";
    },
  },
  async mounted() {
    await this.$store.dispatch("GET_MEDIA", this.$route.params.id);
    let current_post_tag = this.getMedia.media_tags.map((tag) => tag.id);
    console.log(current_post_tag);
    if (current_post_tag.length > 0) {
      this.configuration.tag_search = JSON.stringify(current_post_tag);
    }
    await this.$store.dispatch("GET_ALL_MEDIA", this.configuration);
    let parser = new DOMParser();
    parser = parser.parseFromString(
      this.getMedia.description,
      "text/html"
    ).body;
    let tempParser = parser;
    parser = [...parser.children];
    parser.forEach((element) => {
      if (element.tagName === "H1") {
        let content = element.innerHTML.replace(/(<([^>]+)>)/gi, "");
        let id = content.replace(/ /g, "-");
        element.setAttribute("id", id);
        this.links.push({
          content,
          link: `#${id}`,
        });
      }
    });
    this.$refs.postDescription.appendChild(tempParser);
  },
};
</script>
<style src="./styles.scss" lang="scss" scoped></style>
<style lang="scss">
.post-description {
  p img {
    padding-top: 20px;
    padding-bottom: 20px;
    height: auto;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .ql-video {
    height: 500px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  h1 {
    margin-top: 32px;
    margin-bottom: 32px;
    * {
      padding-left: 8px;
      font-weight: 500;
      font-size: 20px;
      color: #1f2020;
      background-color: #f9f9f9 !important;
      border-radius: 3px !important;
      border-left-style: solid;
      border-left-width: 10px !important;
      border-left-color: var(--v-primary-base) !important;
      height: 48px;
      line-height: 34px;
      @media (max-width: 767px) {
        font-size: 16px !important;
        line-height: 27px !important;
        height: auto;
        padding-bottom: 5px;
        padding-right: 5px;
      }
    }
  }
  h2 {
    font-size: 18px;
    font-family: "NotoSansJP-Medium";
    font-weight: 500;
    margin-top: 28px;
    margin-bottom: 28px;
    color: #13aba3 !important;
    @media (max-width: 767px) {
      font-size: 16px !important;
      line-height: 27px !important;
    }
  }
  .paragraph {
    line-height: 30px;
    @media (max-width: 767px) {
      line-height: 26px;
      font-size: 14px;
    }
  }
}
</style>
