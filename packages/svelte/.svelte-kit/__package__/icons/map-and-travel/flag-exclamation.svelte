<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M15.035 15.376A4.97 4.97 0 0 1 12 13.964a4.99 4.99 0 0 0-7 0m0 0v-9.03a4.99 4.99 0 0 1 7 0 4.99 4.99 0 0 0 7 0v7.023M5 13.964v7.023m14-5.017v3.01m0 3.01V22\"/>";
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
