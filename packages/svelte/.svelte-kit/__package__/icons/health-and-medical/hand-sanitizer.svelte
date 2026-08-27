<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M15 3H9a2 2 0 0 0-2 2m5-2v5m0 3v4m-2-2h4m-7 8h10V11a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3z\"/>";
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
