<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M17 10h4m0 0v4m0-4-2 2c-1 1-2.48 2.033-4 2-1.52.033-3.113-.716-4-2s-2.48-2.033-4-2c-1.52-.033-3.113.716-4 2\"/>";
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
