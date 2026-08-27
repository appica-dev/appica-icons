<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M7 7a5 5 0 1 1 10 0v10a5 5 0 1 1-10 0zm4 0a1 1 0 1 0 2 0 1 1 0 0 0-2 0m0 5a1 1 0 1 0 2 0 1 1 0 0 0-2 0m0 5a1 1 0 1 0 2 0 1 1 0 0 0-2 0\"/>";
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
