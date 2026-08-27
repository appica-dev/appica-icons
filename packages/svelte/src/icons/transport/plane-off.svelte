<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M9.788 5.758 9 3h3l4 7h4a2 2 0 0 1 0 4h-2m-2.718 1.256L12 21H9l2-7H7l-2 2H2l2-4-2-4h3l2 2h3M3 3l18 18\"/>";
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
