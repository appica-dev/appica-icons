<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M15.946 11.551 12 3 4.03 20.275c-.07.2-.018.424.134.572.15.148.374.193.57.116l7.266-2.463 1.594.54M21 15h-2.5a1.5 1.5 0 1 0 0 3h1a1.5 1.5 0 1 1 0 3H17m2 0v1m0-8v1\"/>";
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
