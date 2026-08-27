<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M2 16V8m4 0v8m-4-4h4m5 0a2 2 0 0 1 0 4H9V8h2a2 2 0 0 1 0 4m0 0H9m10-4a4 4 0 1 1 0 8 4 4 0 0 1 0-8m-1 4a1 1 0 1 0 2 0 1 1 0 0 0-2 0\"/>";
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
