<template>

  <section class="login">
    <div class="container-scroller">
      <div class="container-fluid page-body-wrapper full-page-wrapper">
        <div class="content-wrapper d-flex align-items-center auth">
          <div class="row w-100 flex-grow">
            <div class="col-xl-4 col-lg-6 mx-auto">
              <div class="auth-form-light text-left p-5">
                <div class="brand-logo">
                  <h2>DTFPass</h2>
                </div>
                <h4>Получите статистку по профилю за текущий год</h4>
                <h6 class="font-weight-light">Для этого, введите свой id профиля</h6>
                <form class="pt-3">
                  <div class="form-group">
                    <input v-model="id" type="number" class="form-control form-control-lg" placeholder="id">
                  </div>
                  <hr>
                  <div class="mt-3">
                    <b>Как получить ID</b>
                    <p>
                      Откройте свой профиль и скопируйте цифры из ссылки
                    </p>
                    <img src="@/assets/id.png">
                  </div>
                  <div v-if="id.length > 0" class="mt-3">
                    <router-link class="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn" :to="'/dashboard?id=' + id">Получить статистику</router-link>
                  </div>
                </form>
              </div>
              <p style="padding: 10px 20px;display: block;"><a href="https://dtf.ru/u/52199" target="_blank">by Maksim Chingin</a> | <a href="https://github.com/umnik1/dtfpass-stat" target="_blank">GitHub</a></p>
            </div>
          </div>
      </div>
      <!-- content-wrapper ends -->
      </div>
      <!-- page-body-wrapper ends -->
    </div>
  </section>

</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      id: '',
    };
  }
}
</script>
