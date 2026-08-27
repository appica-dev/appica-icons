<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M8 9h1m4 0h3m-8 4h5M8 4h10a3 3 0 0 1 3 3v8c0 .577-.163 1.116-.445 1.573M18 18h-5l-5 3v-3H6a3 3 0 0 1-3-3V7c0-1.085.576-2.036 1.439-2.562M3 3l18 18\"/>";
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
