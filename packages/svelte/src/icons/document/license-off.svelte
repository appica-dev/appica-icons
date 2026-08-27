<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M15 21H6a3 3 0 0 1-3-3v-1h10v2a2 2 0 0 0 2 2m0 0a2 2 0 0 0 2-2v-2m0-4V5a2 2 0 1 1 2 2h-2m2-4H8a3 3 0 0 0-.864.126M5.122 5.151A3 3 0 0 0 5 6v11m6-10h2m-4 4h2M3 3l18 18\"/>";
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
