<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M7 20h10M6 6l6-1 6 1M6 6l3 6a3 3 0 0 1-6 0zm12 0 3 6a3 3 0 0 1-6 0zm-6-3v17\"/>";
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
