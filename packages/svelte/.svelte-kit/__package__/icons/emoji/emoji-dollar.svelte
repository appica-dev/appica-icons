<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M20.87 10.48a9 9 0 1 0-7.875 10.465M9 10h.01M15 10h.01M9.5 15c.658.64 1.56 1 2.5 1 .357 0 .709-.052 1.043-.151M21 15h-2.5a1.5 1.5 0 1 0 0 3h1a1.5 1.5 0 1 1 0 3H17m2 0v1m0-8v1\"/>";
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
