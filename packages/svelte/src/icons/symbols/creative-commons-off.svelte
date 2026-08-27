<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M5.639 5.634a9 9 0 0 0 12.723 12.733m1.686-2.332A9 9 0 0 0 7.955 3.958M10.5 10.5a2.187 2.187 0 0 0-2.914.116 1.927 1.927 0 0 0 0 2.768 2.19 2.19 0 0 0 2.914.116m6-3a2.19 2.19 0 0 0-2.31-.302M3.002 3l18 18\"/>";
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
