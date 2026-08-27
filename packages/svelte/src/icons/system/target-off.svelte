<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M11.284 11.3a1 1 0 1 0 1.41 1.419M8.438 8.49a5 5 0 0 0 7.098 7.044m1.377-2.611a5 5 0 0 0-5.846-5.836m-5.42-1.464a9 9 0 1 0 12.698 12.758m1.683-2.313A9 9 0 0 0 7.952 3.958M2.998 3l18 18\"/>";
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
