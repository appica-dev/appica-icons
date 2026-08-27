<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m6 8 2 2 4-4 4 4 2-2-6-6zm0 8 2-2 4 4 3.5-3.5 2 2L12 22zm14-6 2 2-2 2-2-2zM4 10l2 2-2 2-2-2zm8 0 2 2-2 2-2-2z\"/>";
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
