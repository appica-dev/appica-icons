<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M4.01 4.041A3.5 3.5 0 0 0 6.5 10c.975 0 1.865-.357 2.5-1m.958-3.044a3.5 3.5 0 0 0-2.905-2.912M14 3l7 7m-7 0 7-7m-3 11h3v3m-7-3v7h7L3 3m-.5 18h8l-4-7z\"/>";
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
