<template>
  <div>
    <section v-if="!loaded" class="login">
      <div class="container-scroller">
        <div class="container-fluid page-body-wrapper full-page-wrapper">
          <div class="content-wrapper d-flex align-items-center auth">
            <div class="row w-100 flex-grow">
              <div class="col-xl-4 col-lg-6 mx-auto">
                <div class="auth-form-light text-left p-5">
                  <div class="brand-logo">
                    <h2>Загрузка...</h2>
                  </div>
                  <h4>Пожалуйста подождите, мы получаем статистику по вашему профилю...</h4>
                  <center><img src="@/assets/loader.gif" style="width: 50px;"></center>
                </div>
              </div>
            </div>
        </div>
        <!-- content-wrapper ends -->
        </div>
        <!-- page-body-wrapper ends -->
      </div>
    </section>
    <section v-if="loaded" class="dashboard" style="padding: 10px 200px 20px 200px;background: #2a2f33;color: #FFF;">
      <div class="page-header">
        <div class="d-flex mt-5 align-items-top">
          <img :src="user.avatar" class="img-sm rounded-circle mr-3" alt="image">
          <div class="mb-0 flex-grow">
            <h5 class="mr-2 mb-2">{{ user.name }}</h5>
            <p class="mb-0 font-weight-light"><b>Всего постов:</b> {{ user.totalPosts }} | <b>Всего комменатриев:</b> {{ user.totalComments }}</p>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4 stretch-card grid-margin">
          <div class="card bg-gradient-danger card-img-holder text-white">
            <div class="card-body">
              <img src="../../assets/images/dashboard/circle.svg" class="card-img-absolute" alt="circle-image" />
              <h4 class="font-weight-normal mb-3">Постов в этом году <i class="mdi mdi-chart-line mdi-24px float-right"></i>
              </h4>
              <h2 class="mb-5">{{ posts.length }}</h2>
              <h6 class="card-text">Просмотров: <b>{{ total.hits }}</b></h6>
            </div>
          </div>
        </div>
        <div class="col-md-4 stretch-card grid-margin">
          <div class="card bg-gradient-info card-img-holder text-white">
            <div class="card-body">
              <img src="../../assets/images/dashboard/circle.svg" class="card-img-absolute" alt="circle-image" />
              <h4 class="font-weight-normal mb-3">Добавлений в закладки ваших постов<i class="mdi mdi-bookmark-outline mdi-24px float-right"></i>
              </h4>
              <h2 class="mb-5">{{ total.favorites }}</h2>
            </div>
          </div>
        </div>
        <div class="col-md-4 stretch-card grid-margin">
          <div class="card bg-gradient-success card-img-holder text-white">
            <div class="card-body">
              <img src="../../assets/images/dashboard/circle.svg" class="card-img-absolute" alt="circle-image" />
              <h4 class="font-weight-normal mb-3">Комментариев под вашими постами<i class="mdi mdi-diamond mdi-24px float-right"></i>
              </h4>
              <h2 class="mb-5">{{ total.comments }}</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-7 grid-margin stretch-card">
          <div class="card">
            <div class="card-body">
              <div class="clearfix">
                <h4 class="card-title float-left">Статистика постов по месяцам</h4>
                <div id="visit-sale-chart-legend" class="rounded-legend legend-horizontal legend-top-right float-right">
                  <ul>
                    <li>
                      <span class="legend-dots bg-gradient-primary"></span>Постов
                    </li> 
                    <li>
                        <span class="legend-dots bg-gradient-danger"></span>Закладок
                    </li> 
                    <li>
                          <span class="legend-dots bg-gradient-info"></span>Комментариев
                    </li>
                  </ul>
                </div>
              </div>
                <visitAndSalesStatitics class='mt-5' :height='170' :statistic="month_data"></visitAndSalesStatitics>
            </div>
          </div>
        </div>
        <div class="col-md-5 grid-margin stretch-card">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Статистика постов по подсайтам</h4>
              <trafficSourceChart :height='200' :statistic="subsite_data"></trafficSourceChart>
              <div id="traffic-chart-legend" class="rounded-legend legend-vertical legend-bottom-left pt-4">
                <ul>
                  <li>
                    <span class="legend-dots bg-gradient-info"></span>{{ subsite_data[0].name }}
                    <span class="float-right">{{ subsite_data[0].count }}</span>
                  </li> 
                  <li>
                    <span class="legend-dots bg-gradient-success"></span>{{ subsite_data[1].name }}
                    <span class="float-right">{{ subsite_data[1].count }}</span>
                  </li> 
                  <li>
                    <span class="legend-dots bg-gradient-danger"></span>{{ subsite_data[2].name }}
                    <span class="float-right">{{ subsite_data[2].count }}</span>
                    </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 stretch-card grid-margin">
          <div class="card bg-gradient-danger card-img-holder text-white">
            <div class="card-body">
              <img src="../../assets/images/dashboard/circle.svg" class="card-img-absolute" alt="circle-image" />
              <h4 class="font-weight-normal mb-3">Комментариев в этом году <i class="mdi mdi-message mdi-24px float-right"></i>
              </h4>
              <h2 class="mb-5">{{ comments.total }}</h2>
            </div>
          </div>
        </div>
        <div class="col-md-4 stretch-card grid-margin">
          <div class="card bg-gradient-info card-img-holder text-white">
            <div class="card-body">
              <img src="../../assets/images/dashboard/circle.svg" class="card-img-absolute" alt="circle-image" />
              <h4 class="font-weight-normal mb-3">Вы отвечали на комментарий<i class="mdi mdi-call-missed mdi-24px float-right"></i>
              </h4>
              <h2 class="mb-5">{{ comments.reply }}</h2>
            </div>
          </div>
        </div>
        <div class="col-md-4 stretch-card grid-margin">
          <div class="card bg-gradient-success card-img-holder text-white">
            <div class="card-body">
              <img src="../../assets/images/dashboard/circle.svg" class="card-img-absolute" alt="circle-image" />
              <h4 class="font-weight-normal mb-3">Вы добавляли "медиа" к комментарию<i class="mdi mdi-cloud-upload mdi-24px float-right"></i>
              </h4>
              <h2 class="mb-5">{{ comments.media }}</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-5 grid-margin stretch-card">
          <div class="card">
            <div v-if="this.comments.subsites.length > 0" class="card-body">
              <h4 class="card-title">Статистика комментариев по подсайтам</h4>
              <trafficSourceChart :height='200' :statistic="comments.subsites"></trafficSourceChart>
              <div id="traffic-chart-legend" class="rounded-legend legend-vertical legend-bottom-left pt-4">
                <ul>
                  <li>
                    <span class="legend-dots bg-gradient-info"></span>{{ comments.subsites[0].name }}
                    <span class="float-right">{{ comments.subsites[0].count }}</span>
                  </li> 
                  <li>
                    <span class="legend-dots bg-gradient-success"></span>{{ comments.subsites[1].name }}
                    <span class="float-right">{{ comments.subsites[1].count }}</span>
                  </li> 
                  <li>
                    <span class="legend-dots bg-gradient-danger"></span>{{ comments.subsites[2].name }}
                    <span class="float-right">{{ comments.subsites[2].count }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-7 grid-margin">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Топ комментариев</h4>
              <b-table striped hover responsive :items="comments.data" :fields="comment_fields">
                <template #cell(url)="data">
                  <span v-html="data.value"></span>
                </template>
              </b-table>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 grid-margin">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Список постов</h4>
              <b-table striped hover responsive :items="posts" :fields="fields">
                <template #cell(title)="data">
                  <span v-html="data.value"></span>
                </template>
              </b-table>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import visitAndSalesStatitics from '../../components/charts/widgets/visitAndSalesStatitics'
import trafficSourceChart from '../../components/charts/widgets/trafficSourceChart'
import axios from 'axios';

export default {
  name: 'dashboard',
  components: {
    trafficSourceChart,
    visitAndSalesStatitics
  },
  data() {
    return {
      user: {
        id: 0,
        name: '',
        avatar: '',
        totalPosts: 0,
        totalComments: 0,
      },
      total: {
        comments: 0,
        hits: 0,
        likes: 0,
        favorites: 0,
      },
      fields: [
        {
          key: 'title',
          label: 'Название',
          sortable: true
        },
        {
          key: 'hits',
          label: 'Просмотров',
          sortable: true
        },
        {
          key: 'likes',
          label: 'Оценка',
          sortable: true
        },
        {
          key: 'comments',
          label: 'Комментариев',
          sortable: true
        },
        {
          key: 'favourites',
          label: 'Добавлений в избранное',
          sortable: true
        }
      ],
      comment_fields: [
        {
          key: 'url',
          label: 'Комментарий',
          sortable: true
        },
        {
          key: 'likes',
          label: 'Лайков',
          sortable: true
        }
      ],
      posts: [],
      comments: {
        data: [],
        total: 0,
        likes: 0,
        reply: 0,
        media: 0,
        subsites: [],
      },
      month_data: [],
      subsite_data: [],
      loaded: false,
      time1: null,
      stopComments: false,
      stopPosts: false
    };
  },
  async created() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const userId = urlParams.get('id');
    this.user.id = userId;
    axios.get('https://api.dtf.ru/v1.8/user/' + userId)
      .then((response) => {
        this.user.name = response.data.result.name;
        this.user.avatar = response.data.result.avatar_url;
        this.user.totalPosts = response.data.result.counters.entries;
        this.user.totalComments = response.data.result.counters.comments;
        this.getPostsStatistic();
        this.getCommentsStatistic();
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  },
  methods: {
    async getPostsStatistic() {
      for (var i = 0; i <= Math.round(this.user.totalPosts / 50); i++) {
        await axios.get('https://api.dtf.ru/v1.8/user/'+ this.user.id +'/entries?count=50&offset=' + i*50)
          .then((response) => {
            const result = response.data.result;
            for (let k = 0; k <= result.length; k++) {
              if (result[k] && result[k].dateRFC.includes('2022')) {
                this.total.comments += result[k].commentsCount;
                this.total.hits += result[k].hitsCount;
                this.total.likes += result[k].likes.count;
                this.total.favorites += result[k].favoritesCount;
                const postDate = new Date(result[k].date * 1000);
                if (!result[k].title){
                  result[k].title = '<a href="' + result[k].url + '" target="_blank">Без названия</a>';
                } else {
                  result[k].title = '<a href="' + result[k].url + '" target="_blank">' + result[k].title + '</a>';
                }
                
                const data = {
                  'id': result[k].id,
                  'url': result[k].url,
                  'title': result[k].title,
                  'likes': result[k].likes.count,
                  'comments': result[k].commentsCount,
                  'hits': result[k].hitsCount,
                  'favourites': result[k].favoritesCount,
                  'date': postDate
                };
                this.posts.push(data);

                // Make array for month statisitc
                if (!this.month_data[postDate.getMonth()]) {
                  this.month_data[postDate.getMonth()] = { posts: 1, comments: result[k].commentsCount, favourites: result[k].favoritesCount };
                } else {
                  this.month_data[postDate.getMonth()].posts += 1;
                  this.month_data[postDate.getMonth()].comments += result[k].commentsCount;
                  this.month_data[postDate.getMonth()].favourites += result[k].favoritesCount;
                }

                // Make array for subsite statisitc
                if (!this.subsite_data[result[k].subsite.id]) {
                  this.subsite_data[result[k].subsite.id] = { count: 1, name: result[k].subsite.name };
                } else {
                  this.subsite_data[result[k].subsite.id].count += 1;
                }
              } else {
                if (result[k] && result[k].dateRFC.includes('2021')) {
                  this.subsiteData();
                  this.stopPosts = true;
                  break;
                }
              }
            }
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          });
          if (this.stopPosts) { break; }
      }
    },
    async getCommentsStatistic() {
      for (var i = 0; i <= Math.round(this.user.totalComments / 50); i++) {
        await axios.get('https://api.dtf.ru/v1.8/user/'+ this.user.id +'/comments?count=50&offset=' + i*50)
          .then((response) => {
            const result = response.data.result;
            for (let k = 0; k <= result.length; k++) {
              if (result[k] && result[k].dateRFC.includes('2022')) {
                this.comments.total += 1;
                this.comments.likes += result[k].likes.count;
                if (result[k].replyTo > 0) {
                  this.comments.reply += 1;
                }
                if (result[k].media.length > 0) {
                  this.comments.media += 1;
                }

                const data = {
                  'id': result[k].id,
                  'url': '<a href="' + result[k].entry.url + '?comment=' + result[k].id + '" target="_blank">'+ result[k].id +'</a>',
                  'likes': result[k].likes.count,
                };
                this.comments.data.push(data);

                // Make array for subsite statisitc
                if (typeof result[k].entry.subsite.name !== 'undefined') {
                  if (!this.comments.subsites[result[k].entry.subsite.id]) {
                    this.comments.subsites[result[k].entry.subsite.id] = { count: 1, name: result[k].entry.subsite.name };
                  } else {
                    this.comments.subsites[result[k].entry.subsite.id].count += 1;
                  }
                }
              } else {
                if (result[k] && !result[k].dateRFC.includes('2022')) {
                  this.subsiteCommentsData();
                  this.topComments();
                  this.stopComments = true;
                  break;
                }
              }
            }
          });
          if (this.stopComments) { this.loaded = true; break; }
      }
    },
    subsiteData() {
      this.subsite_data = this.subsite_data.sort((a,b)=> (a.count < b.count ? 1 : -1));
      this.subsite_data = this.subsite_data.slice(0, 3);
    },
    subsiteCommentsData() {
      this.comments.subsites = this.comments.subsites.sort((a,b)=> (a.count < b.count ? 1 : -1));
      this.comments.subsites = this.comments.subsites.slice(0, 3);
    },
    topComments() {
      this.comments.data = this.comments.data.sort((a,b)=> (a.likes < b.likes ? 1 : -1));
      this.comments.data = this.comments.data.slice(0, 8);
    }
  },
}
</script>

<style scoped>

</style>