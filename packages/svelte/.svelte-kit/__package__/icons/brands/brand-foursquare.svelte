<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12.003 8.994H17M7.005 3H17c.644 0 1.11.695.978 1.329l-1.983 9.85a1.01 1.01 0 0 1-1 .81h-2.253c-.308 0-.6.14-.792.38l-4.142 5.246c-.599.751-1.808.33-1.808-.632V4C6 3.436 6.44 3 7 3z\"/>";
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
