<template>



    <!-- //////////////////////////////////////////////////////////////////////
        Thumbnail
    ////////////////////////////////////////////////////////////////////// -->
    <div class="post__image" :style="background"></div>



</template>


<script>
export default {
    name: 'PostThumbnail',
    props: ['thumbnail'],
    computed: {
        background() {
            return {
                'background-image': `url(${this.thumbnail})`
            }
        }
    }
}
</script>

