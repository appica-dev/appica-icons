<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M17.5 15Q15.652 10.995 12 3L4.03 20.275c-.07.2-.017.424.135.572.15.148.374.193.57.116l7.266-2.463m4 .5h6\"/>";
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
