<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M14 20H6a3 3 0 0 1 0-6h11a3 3 0 0 0-3 3m7-3V6a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v8m10 3 4 4m0-4-4 4\"/>";
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
