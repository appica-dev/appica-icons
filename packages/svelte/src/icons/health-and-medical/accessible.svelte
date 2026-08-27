<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path fill=\"currentColor\" d=\"M11.5 7.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0\"/><path d=\"m10 16.5 2-3m0 0 2 3m-2-3v-2m0 0 3-1m-3 1-3-1M3 12a9 9 0 1 0 18.001 0A9 9 0 0 0 3 12m8.5-4.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0\"/>";
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
