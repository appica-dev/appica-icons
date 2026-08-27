<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m12 18.5 7.265 2.463c.197.077.42.032.57-.116a.55.55 0 0 0 .134-.572L12 3 4.03 20.275c-.07.2-.017.424.135.572.15.148.374.193.57.116z\"/>";
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
