<template>
  <div class="jf_wrp" id="swiperImg">
    <div class="jfBox">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="aImg in aImgs">
            <a :href="aImg.href"><img :src="aImg.url"></a>
          </div>      
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <div class="notice">
        <a :href="notice.url" class="notice_msg">{{notice.message}}</a>
        <a :href="notice.url" class="notice_href">详情</a>
      </div>
      <div class="item">
        <router-link v-for="aPage in aPages" :to="aPage.url" :class="aPage.class"><span>{{aPage.name}}</span></router-link>
      </div>
      <div class="new_mark">
        <p class="new_name">{{newItem.name}}</p>
        <div class="new_info">
          <span class="new_per"><i>{{newItem.percent}}</i><i class="new_pert">+{{newItem.int}}</i></span>        
          <span class="new_time"><i>{{newItem.time}}</i>个月</span>
          <span class="new_charge">{{newItem.odd}}可投</span>
        </div>
        <p class="new_barbox">
          <span class="new_target">目标年华利率</span>        
          <span class="new_pernum">{{newItem.bar}}</span>
          <span class="new_bar"><em v-bind:style="{width:newItem.bar}"></em></span>
        </p>
      </div>
      <div class="chwrp">
        <h4><span class="ch_tle">财行优选</span><a class="ch_more" href="javascript:;">更多</a></h4>
        <ul class="chlists">
          <li v-for="chItem in chItems">
            <p class="ch_name">{{chItem.ch_name}}</p>
            <div class="ch_item">
              <span class="ch_item_per">{{chItem.ch_percent}}<i>%</i></span>
              <span class="ch_item_time">{{chItem.ch_time}}<i>个月</i></span>
              <span class="ch_item_charge">{{chItem.ch_odd}}元可投</span>
            </div>
            <p class="ch_barbox">
              <span class="ch_target">目标年华利率</span>
              <span class="ch_pernum">{{chItem.ch_bar}}%</span>
              <span class="ch_bar"><em v-bind:style="{width:chItem.ch_bar+'%'}"></em></span>
            </p>
          </li>
        </ul>        
      </div>
      <div class="betimg"></div>
      <div class="chwrp wdcp_wrp">
        <h4><span class="ch_tle">网贷产品</span><a class="ch_more" href="javascript:;">更多</a></h4>
        <ul class="chlists">
          <li v-for="wdItem in wdItems">
            <p class="ch_name">{{wdItem.wd_name}}</p>
            <div class="ch_item">
              <span class="ch_item_per">{{wdItem.wd_percent}}<i>%</i></span>
              <span class="ch_item_time">{{wdItem.wd_time}}<i>个月</i></span>
              <span class="ch_item_charge">剩余金额{{wdItem.wd_odd}}元</span>
            </div>
            <p class="ch_barbox">
              <span class="ch_target">目标年华利率</span>
              <span class="ch_pernum">{{wdItem.wd_bar}}%</span>
              <span class="ch_bar"><em v-bind:style="{width:wdItem.wd_bar+'%'}"></em></span>
            </p>
          </li>
        </ul>        
      </div>
    </div>
    <jf-footer></jf-footer>
  </div>
</template>

<script type="text/javascript">
  // import Vue from 'vue'
  import Footer from './Footer'
  export default{
      name:'Content',
      data(){
        return {
          aImgs:[         
            {'url':'../../static/img/banner/chnewtask.jpg','href':'../../static/img/banner/chnewtask.jpg'},
            {'url':'../../static/img/banner/gyl.jpg','href':'../../static/img/banner/gyl.jpg'},
            {'url':'../../static/img/banner/summer.jpg','href':'../../static/img/banner/summer.jpg'},
            {'url':'../../static/img/banner/weixin.jpg','href':'../../static/img/banner/weixin.jpg'},
            {'url':'../../static/img/banner/yi.jpg','href':'../../static/img/banner/yi.jpg'}
          ],
          aPages:[
            {'class':'myfl','url':'myfl','name':'我的福利'},
            {'class':'vip','url':'vip','name':'VIP专区'},
            {'class':'safebz','url':'safebz','name':'安全保障'},
            {'class':'usr','url':'usr','name':'账户中心'},
            {'class':'about','url':'about','name':'关于我们'},
            {'class':'online','url':'online','name':'在线客服'},
            {'class':'download','url':'download','name':'下载APP'},
            {'class':'help','url':'help','name':'帮助中心'},
          ],
          newItem:{
            name:'新手标1201测试',
            percent:'12.0%',
            int:'1.0%',
            time:'6',
            odd:'1.00万元',
            bar:'30%'
          },
          chItems:[
            {'ch_name':'三农0607-05','ch_percent':'9.0','ch_time':'1','ch_odd':'9800.00','ch_bar':'50'},
            {'ch_name':'三农0607-06','ch_percent':'10.0','ch_time':'3','ch_odd':'9800.00','ch_bar':'30'},
            {'ch_name':'三农0607-07','ch_percent':'9.0','ch_time':'1','ch_odd':'9800.00','ch_bar':'50'},
            {'ch_name':'三农0607-08','ch_percent':'12.0','ch_time':'6','ch_odd':'1.00万','ch_bar':'20'}
          ],
          wdItems:[
            {'wd_name':'三农0607-05','wd_percent':'9.0','wd_time':'1','wd_odd':'9800.00','wd_bar':'50'},
            {'wd_name':'三农0607-06','wd_percent':'10.0','wd_time':'3','wd_odd':'9800.00','wd_bar':'30'},
            {'wd_name':'三农0607-07','wd_percent':'9.0','wd_time':'1','wd_odd':'9800.00','wd_bar':'50'},
            {'wd_name':'三农0607-08','wd_percent':'12.0','wd_time':'6','wd_odd':'1.00万','wd_bar':'20'}
          ],
          notice:{
            message:'信广金服积分商城全新上线',
            url:'javascript:;'
          }
        }
      },
      methods:{
        swiper:function(){
          new Swiper('.swiper-container', {
            slidesPerView: 1,
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            }
          });
        }
      },
      components:{
        'jf-footer':Footer
      },
      mounted:function(){
        this.swiper();
      }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
