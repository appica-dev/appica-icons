<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m17 3 4 4m-2-2-4.5 4.5m-3-3 6 6m-1-1L10 18H6m0 0v-4l6.5-6.5M6 18l-3 3m4.5-8.5L9 14m1.5-4.5L12 11\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  fill={"none"}
  stroke={"currentColor"}
  stroke-width={"1.5"}
  stroke-linecap={"round"}
  stroke-linejoin={"round"}
  {...props}
/>
