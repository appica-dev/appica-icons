<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M14.987 3.51A9 9 0 1 0 16.5 19.794c2.49-1.437 4.182-3.978 4.5-6.794m-11-3h.01M14 8h.01M12 15q1.5-2 3-2m5-4v.01M20 6a2.003 2.003 0 0 0 .915-3.782 1.98 1.98 0 0 0-2.415.483\"/>";
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
