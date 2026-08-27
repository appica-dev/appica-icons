<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M11 11h2v2h-2zm-7.366 4.634 1.732-1 1 1.732-1.732 1zM11 19h2v2h-2zm7.634-4.366 1.732 1-1 1.732-1.732-1zm-1-7 1.732-1 1 1.732-1.732 1zM11 3h2v2h-2zM3.634 8.366l1-1.732 1.732 1-1 1.732z\"/>";
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
