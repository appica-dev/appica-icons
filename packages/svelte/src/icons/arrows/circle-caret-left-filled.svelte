<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75a9.75 9.75 0 1 1 0-19.5m1.95 12.675v-5.85a.974.974 0 0 0-1.664-.69L9.36 11.31a.976.976 0 0 0 0 1.38l2.925 2.924a.975.975 0 0 0 1.378 0l.081-.091a.97.97 0 0 0 .205-.598\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  {...props}
/>
