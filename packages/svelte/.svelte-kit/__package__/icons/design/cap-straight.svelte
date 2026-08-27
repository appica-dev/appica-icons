<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M8 12a2 2 0 0 1-2 2m2-2a2 2 0 0 0-2-2m2 2h12M6 14a2 2 0 1 1 0-4m0 4v2a2 2 0 0 0 2 2h12M6 10V8a2 2 0 0 1 2-2h12\"/>";
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
