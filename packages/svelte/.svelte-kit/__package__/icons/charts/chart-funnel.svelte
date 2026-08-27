<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M5.09 9H18.91M7.064 15h9.87M4.486 3h15.029a.98.98 0 0 1 .8.416 1 1 0 0 1 .135.9l-5.038 15.316a2 2 0 0 1-.719.99c-.336.246-.74.378-1.155.378h-3.075c-.415 0-.819-.132-1.155-.378a2 2 0 0 1-.719-.99L3.551 4.316a1.01 1.01 0 0 1 .135-.9.99.99 0 0 1 .8-.416\"/>";
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
