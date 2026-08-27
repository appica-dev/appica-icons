<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M14 20H6a2 2 0 0 1-2-2m0 0V6a2 2 0 0 1 2-2h12v5M4 18a2 2 0 0 1 2-2h5m4 0 3-3m0 0 3 3m-3-3v9\"/>";
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
