<template>
    <main id="Contact">
        <div class="content">

            <section class="intro _container--large _text--large">
                <!-- <p class="text--large"></p> -->
                <p class="_text">Ahoj, očekávali jsme tě! Kontaktuj nás přímo na <a href="https://join.slack.com/t/eoeostudio/shared_invite/enQtNTA3NjI2NTY3ODEyLWRiMTI3NjY2NjdhNmZjMDM5NDBiY2Y3OGNiNTMyYWJjNTY2OTBhMDE4NjRjZjVkMTkzMDlhOTZkODc5NjIyZGI" class="_clickable">slacku</a> nebo napis <a class="_clickable">email</a>.</p>
            </section>

            <section class="new-project">
                <div>
                    <!-- <h3>Odstartuj s n8mi svuj dalsi projekt. Tesime se na to!</h3> -->
                    <link-unit :to="'/form/new-project'">
                        Odstartovat projekt
                    </link-unit>
                </div>
            </section>

            <section class="address _container--large">
                <h3>Sídlíme</h3>
                <div>
                    <h3 class="city">Praha</h3>
                    <p>Čínská 18</p>
                    <p>Praha 6, Bubeneč</p>
                    <p>Czech republic</p>
                    <p>ahoj@eoeo.cz</p>
                </div>
            </section>
        </div>

        <footer-block />

    </main>
</template>



<script>

import FooterBlock from '~/components/Home/Footer'
import LinkUnit from '~/components/Home/_home/LinkUnit'

export default {
    components: {
        'footer-block': FooterBlock,
        'link-unit': LinkUnit
    }
}
</script>




<style lang="stylus" scoped>

@import '~assets/stylus/variables'

#Contact
    display flex
    flex-direction column
    min-height 100vh

.content
    flex-grow 1

.intro
    margin-top 10%

.address
    .city
        font-weight 500
        opacity 1
        margin-top 2em

.new-project
    background-color $grey--lighter
    margin 5% 0 5% 10%
    box-sizing border-box
    padding 4em
    width 90%
    height 0
    padding-bottom 40%
    background-image url("~assets/race.png")
    background-position right center
    background-repeat no-repeat
    background-size cover



</style>
