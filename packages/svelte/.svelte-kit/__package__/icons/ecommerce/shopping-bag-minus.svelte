<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12.322 21h-4a3.1 3.1 0 0 1-1.99-.723 3 3 0 0 1-1.03-1.821l-1.278-8.152a1.97 1.97 0 0 1 .467-1.606c.192-.22.429-.395.696-.515A2.1 2.1 0 0 1 6.037 8H17.59c.294 0 .584.062.85.183.268.12.505.296.696.515a1.965 1.965 0 0 1 .468 1.606l-.744 4.744M8.757 11V6c0-.796.322-1.559.895-2.121A3.09 3.09 0 0 1 11.812 3c.811 0 1.589.316 2.162.879s.895 1.325.895 2.121v5m1.019 8H22\"/>";
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
