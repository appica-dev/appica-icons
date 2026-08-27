<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m17 7.875 3-1.687m-3 1.687v3.375m0-3.375-3-1.687m3 1.687 3 1.688m-3-1.688V4.5m0 3.375-3 1.688M3 3l18 18M6.5 15a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5\"/>";
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
